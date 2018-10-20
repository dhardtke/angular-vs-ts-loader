import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub963Component} from "./stub963.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub963Component
        }])
    ],
    declarations: [
        Stub963Component
    ]
})
export class Stub963Module {

}
