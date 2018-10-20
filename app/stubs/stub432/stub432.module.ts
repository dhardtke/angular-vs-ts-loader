import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub432Component} from "./stub432.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub432Component
        }])
    ],
    declarations: [
        Stub432Component
    ]
})
export class Stub432Module {

}
