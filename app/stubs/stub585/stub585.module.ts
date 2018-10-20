import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub585Component} from "./stub585.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub585Component
        }])
    ],
    declarations: [
        Stub585Component
    ]
})
export class Stub585Module {

}
