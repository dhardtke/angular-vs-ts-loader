import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub995Component} from "./stub995.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub995Component
        }])
    ],
    declarations: [
        Stub995Component
    ]
})
export class Stub995Module {

}
