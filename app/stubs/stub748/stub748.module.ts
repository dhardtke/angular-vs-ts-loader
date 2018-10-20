import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub748Component} from "./stub748.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub748Component
        }])
    ],
    declarations: [
        Stub748Component
    ]
})
export class Stub748Module {

}
