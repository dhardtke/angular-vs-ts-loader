import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub28Component} from "./stub28.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub28Component
        }])
    ],
    declarations: [
        Stub28Component
    ]
})
export class Stub28Module {

}
